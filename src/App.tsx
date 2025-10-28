import { useEffect, useState } from "react";
import styled from "styled-components";
import { ForkMeOnGithub } from "./ForkMeOnGithub";
import { formatSql } from "./formatSql";
import { SqlEditor } from "./SqlEditor";
import { Options, OptionsBar } from "./options/OptionsBar";

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
  display: flex;
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
--
--paste your SQL in here
--
select client.id,
  client.name client_name, organization.name org_name,
  count((orders.id)) as nr_of_orders
from client left join organization on client.organization_id=organization.id
left join orders on orders.client_id=client.id
where client.status = 'active'
  and client.id in (28,214,457)
  and orders.status in ('active','pending','processing')
group by client.id order by client.name limit 100
`.trim();

export function App() {
  const [sql, setSql] = useState(exampleSql);
  const [formattedSql, setFormattedSql] = useState(exampleSql);
  const [options, setOptions] = useState<Options>({
    dialect: "sqlite",
    sqlKeywordCase: "upper",
    sqlLiteralCase: "upper",
    sqlCanonicalSyntax: true,
    sqlParamTypes: ["?"],
  });

  useEffect(() => {
    const runPrettier = async () => {
      try {
        setFormattedSql(await formatSql(sql, options));
      } catch (e) {
        if (e instanceof Error) {
          setFormattedSql(e.message);
        }
      }
    };
    runPrettier();
  }, [sql, options, setFormattedSql]);

  return (
    <>
      <AppContainer>
        <Header>
          <Title>Prettier SQL formatting demo</Title>
          <OptionsBar value={options} onChange={setOptions} />
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
