export default function Factures() {
  const factures = [
    { id: 1, client: "Police", montant: 1500, statut: "Payée" },
    { id: 2, client: "Services médicaux d'urgence", montant: 800, statut: "En attente" },
    { id: 3, client: "Mécano Benny's", montant: 2300, statut: "En retard" },
  ];

  const total = factures.reduce((acc, f) => acc + f.montant, 0);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial", backgroundColor: "#0f172a", minHeight: "100vh", color: "white" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        📄 Gestion des Factures
      </h1>

      <div style={{
        backgroundColor: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
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
                <td style={{ padding: "12px" }}>
                  <span style={{
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    backgroundColor:
                      facture.statut === "Payée"
                        ? "#16a34a"
                        : facture.statut === "En attente"
                        ? "#facc15"
                        : "#dc2626",
                    color: facture.statut === "En attente" ? "black" : "white"
                  }}>
                    {facture.statut}
                  </span>
                </td>
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