import { useEffect, useState } from "react";
import styled from "styled-components";
import { formatSql } from "./formatSql";
import { SqlEditor } from "./SqlEditor";

const AppContainer = styled.div`
  margin: 10px;
  display: grid;
  height: calc(100vh - 20px);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 10px;
`;

const EditorPane = styled.div`
  background-color: rgb(22, 27, 34);
  overflow-y: auto;
  overflow-x: auto;
`;

const exampleSql = `
select supplier_name,city from
(select * from suppliers join addresses on suppliers.address_id=addresses.id)
as suppliers
where supplier_id>500
order by supplier_name asc,city desc;
`;

export function App() {
  const [sql, setSql] = useState(exampleSql);
  const [formattedSql, setFormattedSql] = useState(exampleSql);

  useEffect(() => {
    try {
      setFormattedSql(formatSql(sql));
    } catch (e) {
      if (e instanceof Error) {
        setFormattedSql(e.message);
      }
    }
  }, [sql, setFormattedSql]);

  return (
    <AppContainer>
      <EditorPane>
        <SqlEditor value={sql} onChange={setSql} />
      </EditorPane>
      <EditorPane>
        <SqlEditor value={formattedSql} readOnly />
      </EditorPane>
    </AppContainer>
  );
}
