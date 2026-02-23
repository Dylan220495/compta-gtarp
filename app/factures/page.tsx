export default function FacturesPage() {
  const factures = [
    { id: 1, client: "Client A", montant: 250, statut: "Payée" },
    { id: 2, client: "Client B", montant: 480, statut: "En attente" },
    { id: 3, client: "Client C", montant: 120, statut: "Impayée" },
  ]

  return (
    <div style={{ padding: "20px" }}>
      <h1>📄 Liste des Factures</h1>

      <table border={1} cellPadding={10} style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Montant (€)</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {factures.map((facture) => (
            <tr key={facture.id}>
              <td>{facture.id}</td>
              <td>{facture.client}</td>
              <td>{facture.montant}</td>
              <td>{facture.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}