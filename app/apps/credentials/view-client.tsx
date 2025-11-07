"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, type ChangeEvent } from "react";

type Role = "PKWT" | "KARYAWAN" | "KASUBAG" | "KABAG" | "GUEST";
type Decision = "PENDING" | "APPROVED" | "REJECTED";
type Category = "HO" | "REGIONAL";

type App = { id: string; name: string; category: Category; username: string; password: string; description?: string | null };
type User = { id: string; name: string };
type Request = { id: string; appId: string; status: Decision; type: "PKWT" | "GUEST"; rejectionNote?: string | null; pic?: User | null };

type Props = {
  role: Role;
  apps: App[];
  myReqs: (Request & { app: App; pic: User | null })[];
  pics: User[];
};

export default function AppsClient({ role, apps, myReqs, pics }: Props) {
  const [selectedAppId, setSelectedAppId] = useState<string>("");
  const [division, setDivision] = useState("");
  const [reason, setReason] = useState("");
  const [picId, setPicId] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState<React.ReactNode>(null);

  const onChange = (fn: (v: string) => void) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => fn(e.target.value);

  const showModal = (title: string, body: React.ReactNode) => {
    setModalTitle(title); setModalBody(body); setModalOpen(true);
  };

  const createPKWTReq = async () => {
    if (!selectedAppId || !picId) return alert("Pilih app dan PIC.");
    const res = await fetch("/api/requests", {
      method: "POST",
      body: JSON.stringify({ type: "PKWT", appId: selectedAppId, picId }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) { alert("Request terkirim ke PIC."); location.reload(); }
    else alert("Gagal kirim request.");
  };

  const createGuestReq = async () => {
    if (!selectedAppId || !division || reason.trim().length < 5) return alert("Lengkapi form guest.");
    const name = "Guest";
    const res = await fetch("/api/requests", {
      method: "POST",
      body: JSON.stringify({ type: "GUEST", appId: selectedAppId, name, division, reason }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) { alert("Request terkirim ke Kasubag & Kabag."); location.reload(); }
    else alert("Gagal kirim request.");
  };

  const reveal = (app: App) => {
    showModal("Kredensial Aplikasi", (
      <div className="space-y-2">
        <p><b>{app.name}</b></p>
        <p>Username: <code>{app.username}</code></p>
        <p>Password: <code>{app.password}</code></p>
      </div>
    ));
  };

  const myStatusFor = (appId: string) => myReqs.find(r => r.appId === appId);

  const bodyStaff = (
    <div className="grid md:grid-cols-2 gap-4">
      {apps.map(app => (
        <Card key={app.id} className="hover:shadow-lg transition">
          <CardHeader><CardTitle>{app.name} <span className="text-xs text-gray-500">({app.category})</span></CardTitle></CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="text-sm">{app.description}</p>
            <Button onClick={() => reveal(app)}>Lihat</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const bodyPKWT = (
    <div className="grid gap-4">
      <Card>
        <CardHeader><CardTitle>Buat Permohonan Akses (PKWT)</CardTitle></CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-3">
          <select className="border rounded-md px-3 py-2 text-sm" value={selectedAppId} onChange={onChange(setSelectedAppId)}>
            <option value="">Pilih App HO/Regional</option>
            {apps.map(a => <option key={a.id} value={a.id}>{a.name} — {a.category}</option>)}
          </select>
          <select className="border rounded-md px-3 py-2 text-sm" value={picId} onChange={onChange(setPicId)}>
            <option value="">Pilih PIC</option>
            {pics.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <Button onClick={createPKWTReq}>Kirim ke PIC</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Status Permohonan</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {apps.map(a => {
            const r = myStatusFor(a.id);
            if (!r) return (
              <div key={a.id} className="flex justify-between items-center p-3 rounded border">
                <span>{a.name}</span><span className="text-gray-500 text-sm">Belum diajukan</span>
              </div>
            );
            return (
              <div key={a.id} className="flex justify-between items-center p-3 rounded border">
                <div>
                  <div className="font-medium">{a.name}</div>
                  <div className="text-xs text-gray-500">PIC: {r.pic?.name ?? "-"}</div>
                </div>
                {r.status === "APPROVED" && <Button onClick={() => reveal(a)}>Lihat Kredensial</Button>}
                {r.status === "PENDING" && <span className="text-amber-600">Menunggu Approval</span>}
                {r.status === "REJECTED" && <Button variant="destructive" onClick={() => showModal("Ditolak PIC", <p>Alasan: {r.rejectionNote ?? "(Tidak ada alasan)"} </p>)}>Ditolak</Button>}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );

  const bodyGuest = (
    <div className="grid gap-4">
      <Card>
        <CardHeader><CardTitle>Form Permohonan (Guest)</CardTitle></CardHeader>
        <CardContent className="grid md:grid-cols-4 gap-3">
          <select className="border rounded-md px-3 py-2 text-sm" value={selectedAppId} onChange={onChange(setSelectedAppId)}>
            <option value="">Pilih App</option>
            {apps.map(a => <option key={a.id} value={a.id}>{a.name} — {a.category}</option>)}
          </select>
          <Input placeholder="Divisi" value={division} onChange={(e) => setDivision(e.target.value)} />
          <Input placeholder="Alasan permohonan" value={reason} onChange={(e) => setReason(e.target.value)} />
          <Button onClick={createGuestReq}>Kirim (Kasubag & Kabag)</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Status Permohonan</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {apps.map(a => {
            const r = myStatusFor(a.id);
            if (!r) return (
              <div key={a.id} className="flex justify-between items-center p-3 rounded border">
                <span>{a.name}</span><span className="text-gray-500 text-sm">Belum diajukan</span>
              </div>
            );
            return (
              <div key={a.id} className="flex justify-between items-center p-3 rounded border">
                <div>
                  <div className="font-medium">{a.name}</div>
                  <div className="text-xs text-gray-500">Kasubag & Kabag harus approve.</div>
                </div>
                {r.status === "APPROVED" && <Button onClick={() => reveal(a)}>Lihat Kredensial</Button>}
                {r.status === "PENDING" && <span className="text-amber-600">Menunggu Approval</span>}
                {r.status === "REJECTED" && <Button variant="destructive" onClick={() => showModal("Ditolak", <p>Permohonan ditolak.</p>)}>Ditolak</Button>}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Info Username & Password</h1>
        {(role === "KARYAWAN" || role === "KASUBAG" || role === "KABAG") && bodyStaff}
        {role === "PKWT" && bodyPKWT}
        {role === "GUEST" && bodyGuest}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{modalTitle}</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <div className="mt-2">{modalBody}</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
