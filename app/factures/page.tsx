"use client";
import { useState } from "react";

export default function Factures() {
  const [factures, setFactures] = useState([
    { id: 1, client: "Police", montant: 1500, statut: "Payée" },
    { id: 2, client: "Services médicaux d'urgence", montant: 800, statut: "En attente" },
    { id: 3, client: "Mécano Benny's", montant: 2300, statut: "En retard" },
  ]);

  const [client, setClient] = useState("");
  const [montant, setMontant] = useState("");

  const ajouterFacture = () => {
    if (!client || !montant) return;

    const nouvelleFacture = {
      id: factures.length + 1,
      client,
      montant: Number(montant),
      statut: "En attente",
    };

    setFactures([...factures, nouvelleFacture]);
    setClient("");
    setMontant("");
  };

  const total = factures.reduce((acc, f) => acc + f.montant, 0);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial", backgroundColor: "#0f172a", minHeight: "100vh", color: "white" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        📄 Gestion des Factures
      </h1>

      {/* FORMULAIRE */}
      <div style={{
        marginBottom: "30px",
        backgroundColor: "#1e293b",
        padding: "20px",
        borderRadius: "12px"
      }}>
        <h2 style={{ marginBottom: "15px" }}>Ajouter une facture</h2>

        <input
          placeholder="Nom du client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", borderRadius: "6px", border: "none" }}
        />

        <input
          placeholder="Montant (€)"
          type="number"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", borderRadius: "6px", border: "none" }}
        />

        <button
          onClick={ajouterFacture}
          style={{
            padding: "10px 15px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer"
          }}
        >
          Ajouter
        </button>
      </div>

      {/* TABLEAU */}
      <div style={{
        backgroundColor: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #334155" }}>
              <th style={{ padding: "12px" }}>ID</th>
              <th style={{ padding: "12px" }}>Client</th>
              <th style={{ padding: "12px" }}>Montant (€)</th>
              <th style={{ padding: "12px" }}>Statut</th>
            </tr>
          </thead>

          <tbody>
            {factures.map((facture) => (
              <tr key={facture.id} style={{ borderBottom: "1px solid #334155" }}>
                <td style={{ padding: "12px" }}>{facture.id}</td>
                <td style={{ padding: "12px" }}>{facture.client}</td>
                <td style={{ padding: "12px" }}>{facture.montant}€</td>
                <td style={{ padding: "12px" }}>{facture.statut}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{
          marginTop: "20px",
          textAlign: "right",
          fontSize: "18px",
          fontWeight: "bold"
        }}>
          Total : {total} €
        </div>
      </div>
    </main>
  );
}