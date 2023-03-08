import { useEffect, useState } from "react";
import styled from "styled-components";
import { Dialect, DialectSelect } from "./DialectSelect";
import { ForkMeOnGithub } from "./ForkMeOnGithub";
import { formatSql } from "./formatSql";
import { SqlEditor } from "./SqlEditor";

const AppContainer = styled.div`
  margin: 10px;
  height: calc(100vh - 20px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px 1fr;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas:
    "header header"
    "left right";
`;

const Header = styled.div`
  grid-area: header;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: normal;
  display: inline-block;
  padding-right: 32px;
`;

const EditorPane = styled.div`
  background-color: rgb(22, 27, 34);
  overflow-y: auto;
  overflow-x: auto;
`;
const LeftPane = styled(EditorPane)`
  grid-area: left;
`;
const RightPane = styled(EditorPane)`
  grid-area: right;
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
  const [dialect, setDialect] = useState<Dialect>("sqlite");

  useEffect(() => {
    try {
      setFormattedSql(formatSql(sql, dialect));
    } catch (e) {
      if (e instanceof Error) {
        setFormattedSql(e.message);
      }
    }
  }, [sql, dialect, setFormattedSql]);

  return (
    <>
      <AppContainer>
        <Header>
          <Title>Prettier SQL formatting demo</Title>
          dialect: <DialectSelect value={dialect} onChange={setDialect} />
        </Header>
        <LeftPane>
          <SqlEditor value={sql} onChange={setSql} />
        </LeftPane>
        <RightPane>
          <SqlEditor value={formattedSql} readOnly />
        </RightPane>
      </AppContainer>
      <ForkMeOnGithub />
    </>
  );
}
