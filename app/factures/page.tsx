export default function Factures() {
  const factures = [
    { id: 1, client: "Police", montant: 1500 },
    { id: 2, client: "EMS", montant: 800 },
    { id: 3, client: "Mécano Benny's", montant: 2300 },
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>📄 Liste des Factures</h1>

      <table style={{ marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Client</th>
            <th style={cellStyle}>Montant (€)</th>
          </tr>
        </thead>
        <tbody>
          {factures.map((facture) => (
            <tr key={facture.id}>
              <td style={cellStyle}>{facture.id}</td>
              <td style={cellStyle}>{facture.client}</td>
              <td style={cellStyle}>{facture.montant}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

const cellStyle = {
  border: "1px solid white",
  padding: "10px",
};