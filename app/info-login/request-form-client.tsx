"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CheckCircle2, XCircle, Send, UserRound, Building2, FileText, ShieldCheck } from "lucide-react";

type Role = "PKWT" | "KARYAWAN" | "KASUBAG" | "KABAG" | "GUEST";
type Decision = "PENDING" | "APPROVED" | "REJECTED";
type Category = "HO" | "REGIONAL";

type App = {
  id: string;
  name: string;
  category: Category;
  username: string;
  password: string;
  description?: string | null;
};

type User = { id: string; name: string; email?: string | null };

type Approval = {
  id: string;
  requestId: string;
  approverId: string;
  role: Role;
  decision: Decision;
  note?: string | null;
  decidedAt?: Date | null;
  approver?: User | null;
};

type MyReq = {
  id: string;
  type: "PKWT" | "GUEST";
  appId: string;
  requesterId: string;
  picId?: string | null;
  reason?: string | null;
  division?: string | null;
  status: Decision;
  rejectionNote?: string | null;
  approvals: Approval[];
  app: App;
  pic: User | null;
};

export default function RequestFormClient({
  role,
  apps,
  pics,
  myReqs,
  userName,
}: {
  role: Role;
  apps: App[];
  pics: User[];
  myReqs: MyReq[];
  userName: string;
}) {
  // COMMON UI STATE
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // ====== PKWT FORM ======
  const [pkwtAppId, setPkwtAppId] = useState<string>("");
  const [pkwtPicId, setPkwtPicId] = useState<string>("");

  // ====== GUEST FORM ======
  const [guestName, setGuestName] = useState<string>(userName);
  const [guestDivision, setGuestDivision] = useState<string>("");
  const [guestReason, setGuestReason] = useState<string>("");
  const [guestAppId, setGuestAppId] = useState<string>("");

  // ====== POPUP APPROVED ======
  const approvedReqs = useMemo(() => myReqs.filter((r) => r.status === "APPROVED"), [myReqs]);
  const [showApproved, setShowApproved] = useState<boolean>(approvedReqs.length > 0);

  useEffect(() => {
    if (approvedReqs.length > 0) setShowApproved(true);
  }, [approvedReqs.length]);

  async function submitPKWT(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    if (!pkwtAppId || !pkwtPicId) {
      setErrorMsg("Pilih App dan PIC terlebih dahulu.");
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "PKWT", appId: pkwtAppId, picId: pkwtPicId }),
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Gagal mengirim permohonan PKWT.");
      }
      window.location.reload();
    } catch (err) {
      setErrorMsg((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  async function submitGuest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    if (!guestName.trim() || !guestDivision.trim() || !guestReason.trim() || !guestAppId) {
      setErrorMsg("Isi semua field dengan benar.");
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "GUEST",
          appId: guestAppId,
          name: guestName,
          division: guestDivision,
          reason: guestReason,
        }),
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Gagal mengirim permohonan Guest.");
      }
      window.location.reload();
    } catch (err) {
      setErrorMsg((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  // ====== UI ======
  const Section = ({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) => (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-emerald-600/10 text-emerald-700 dark:text-emerald-300">{icon}</div>
      <div>
        <h2 className="text-lg font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  );

  return (
    <main className="min-h-dvh relative px-4 pt-2 pb-12">
      <div className="mx-auto max-w-4xl space-y-6">
        {role === "PKWT" ? (
          <>
            <Section
              title="Permohonan Akses — PKWT Tekpol"
              desc="Pilih PIC persetujuan dan aplikasi yang dibutuhkan (Apps HO / Regional)."
              icon={<ShieldCheck className="w-5 h-5" />}
            />

            <form
              onSubmit={submitPKWT}
              className="bg-white/85 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800 rounded-xl p-4 md:p-6 space-y-4 shadow-sm"
            >
              <div>
                <label className="text-sm font-medium">Pilih Aplikasi</label>
                <select
                  value={pkwtAppId}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPkwtAppId(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                  required
                >
                  <option value="">-- pilih --</option>
                  <optgroup label="Apps HO">
                    {apps.filter((a) => a.category === "HO").map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Apps Regional">
                    {apps.filter((a) => a.category === "REGIONAL").map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">PIC Approval</label>
                <select
                  value={pkwtPicId}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPkwtPicId(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                  required
                >
                  <option value="">-- pilih PIC --</option>
                  {pics.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {errorMsg && <div className="text-sm text-red-600">{errorMsg}</div>}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold shadow-md transition disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                Kirim Permohonan
              </button>
            </form>
          </>
        ) : (
          <>
            <Section
              title="Permohonan Akses — Tamu (Guest)"
              desc="Isi identitas dan alasan. Permohonan akan dinilai oleh Kasubag dan Kabag."
              icon={<UserRound className="w-5 h-5" />}
            />

            <form
              onSubmit={submitGuest}
              className="bg-white/85 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800 rounded-xl p-4 md:p-6 space-y-4 shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Nama</label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGuestName(e.target.value)}
                    placeholder="Nama lengkap"
                    className="mt-1 w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Divisi</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={guestDivision}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGuestDivision(e.target.value)}
                      placeholder="Contoh: Teknik & Pengolahan"
                      className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Aplikasi</label>
                <select
                  value={guestAppId}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGuestAppId(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                  required
                >
                  <option value="">-- pilih --</option>
                  <optgroup label="Apps HO">
                    {apps.filter((a) => a.category === "HO").map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Apps Regional">
                    {apps.filter((a) => a.category === "REGIONAL").map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Alasan Permohonan</label>
                <textarea
                  value={guestReason}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setGuestReason(e.target.value)}
                  placeholder="Tuliskan alasan minimal 5 karakter..."
                  className="mt-1 w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40 min-h-24"
                  minLength={5}
                  required
                />
              </div>

              {errorMsg && <div className="text-sm text-red-600">{errorMsg}</div>}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold shadow-md transition disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                Kirim Permohonan
              </button>
            </form>
          </>
        )}

        {/* RIWAYAT SINGKAT */}
        <div className="bg-white/85 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800 rounded-xl p-4 md:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-4 h-4 text-slate-400" />
            <h3 className="text-sm font-semibold">Status Permohonan Anda</h3>
          </div>
          <div className="space-y-2">
            {myReqs.length === 0 && <div className="text-sm text-slate-500">Belum ada permohonan.</div>}
            {myReqs.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between rounded-lg border border-slate-200/70 dark:border-slate-800 px-3 py-2"
              >
                <div className="text-sm">
                  <div className="font-medium">
                    {r.app.name} <span className="text-xs text-slate-500">({r.type})</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    {r.status === "PENDING" && "Menunggu persetujuan"}
                    {r.status === "APPROVED" && "Disetujui"}
                    {r.status === "REJECTED" && (r.rejectionNote ? `Ditolak: ${r.rejectionNote}` : "Ditolak")}
                  </div>
                </div>
                <div>
                  {r.status === "PENDING" && (
                    <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-700">PENDING</span>
                  )}
                  {r.status === "APPROVED" && (
                    <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700">APPROVED</span>
                  )}
                  {r.status === "REJECTED" && (
                    <span className="text-xs px-2 py-1 rounded bg-rose-100 text-rose-700">REJECTED</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP INFO KREDENSIAL (untuk req APPROVED) */}
      {showApproved && approvedReqs.length > 0 && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-2xl">
            <div className="px-5 py-4 border-b border-slate-200/70 dark:border-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <div className="font-semibold">Akses Disetujui</div>
              <button
                className="ml-auto p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setShowApproved(false)}
                aria-label="Tutup"
                title="Tutup"
              >
                <XCircle className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              {approvedReqs.map((r) => (
                <div key={r.id} className="rounded-lg border border-slate-200/70 dark:border-slate-800 p-3">
                  <div className="text-sm font-semibold">{r.app.name}</div>
                  <div className="text-xs text-slate-500 mb-2">
                    {r.type === "PKWT" ? "Disetujui PIC" : "Disetujui Kasubag & Kabag"}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-slate-500">Username</div>
                      <div className="font-mono">{r.app.username}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Password</div>
                      <div className="font-mono">{r.app.password}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-[11px] text-slate-500">Simpan kredensial ini dengan aman. Jangan bagikan ke pihak lain.</div>
            </div>
            <div className="px-5 py-4 border-t border-slate-200/70 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowApproved(false)}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold shadow-md transition"
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
