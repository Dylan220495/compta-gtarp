"use client";
import { useState } from "react";

type Facture = {
  id: number;
  client: string;
  montant: number;
  statut: "Payée" | "En attente" | "En retard";
};

export default function Factures() {
  const [factures, setFactures] = useState<Facture[]>([
    { id: 1, client: "Police", montant: 1500, statut: "Payée" },
    { id: 2, client: "Services médicaux d'urgence", montant: 800, statut: "En attente" },
    { id: 3, client: "Mécano Benny's", montant: 2300, statut: "En retard" },
  ]);

  const supprimerFacture = (id: number) => {
    setFactures(factures.filter(f => f.id !== id));
  };

  const changerStatut = (id: number) => {
    setFactures(
      factures.map(f =>
        f.id === id
          ? {
              ...f,
              statut:
                f.statut === "En attente"
                  ? "Payée"
                  : f.statut === "Payée"
                  ? "En retard"
                  : "En attente",
            }
          : f
      )
    );
  };

  const total = factures.reduce((acc, f) => acc + f.montant, 0);

  const badgeColor = (statut: string) => {
    if (statut === "Payée") return "#16a34a";
    if (statut === "En attente") return "#facc15";
    return "#dc2626";
  };

  return (
    <main style={{
      padding: "40px",
      fontFamily: "Arial",
      backgroundColor: "#0f172a",
      minHeight: "100vh",
      color: "white"
    }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        📄 Gestion des Factures
      </h1>

      <div style={{
        backgroundColor: "#1e293b",
        padding: "20px",
        borderRadius: "12px"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #334155" }}>
              <th>ID</th>
              <th>Client</th>
              <th>Montant (€)</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {factures.map((facture) => (
              <tr key={facture.id} style={{ borderBottom: "1px solid #334155" }}>
                <td>{facture.id}</td>
                <td>{facture.client}</td>
                <td>{facture.montant} €</td>
                <td>
                  <span style={{
                    backgroundColor: badgeColor(facture.statut),
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "12px"
                  }}>
                    {facture.statut}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => changerStatut(facture.id)}
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      borderRadius: "6px",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    🔁 Statut
                  </button>

                  <button
                    onClick={() => supprimerFacture(facture.id)}
                    style={{
                      backgroundColor: "#dc2626",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "6px",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    🗑 Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{
          marginTop: "20px",
          textAlign: "right",
          fontWeight: "bold",
          fontSize: "18px"
        }}>
          Total : {total} €
        </div>
      </div>
    </main>
  );
}