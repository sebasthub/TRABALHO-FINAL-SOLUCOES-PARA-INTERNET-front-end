import { Table } from '@mantine/core';
import { useEffect, useState } from "react";



function App() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/manutencoes`).then((response) => response.json()).then((character) => setElements(character.response));
  });
  const rows = elements.map((element) => (
    <tr key={element.idmanutencao}>
      <td>{element.data.split("T")[0]}</td>
      <td>{element.solicitante}</td>
      <td>{element.veiculo}</td>
      <td>{element.empresa_manutencao}</td>
      <td>{element.retorno.split("T")[0]}</td>
      <td>{element.valor}</td>
      <td>{element.problemas}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>data</th>
          <th>solicitante</th>
          <th>veiculo</th>
          <th>empresa realizadora</th>
          <th>data de retorno</th>
          <th>valor</th>
          <th>problemas</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default App;
