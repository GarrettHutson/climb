

export default async function Home() {

  let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let graphql = JSON.stringify({
        query:
          "query MyQuery {\n  areas(filter: {area_name: {match: \"Rifle Mountain Park\", exactMatch: true}}) {\n    area_name\n    totalClimbs\n    children {\n      area_name\n      totalClimbs\n      climbs {\n        name\n    grades {\n yds  \n}     uuid\n        content {\n          description\n          location\n          protection\n        }\n        grades {\n          yds\n        }\n      }\n    }\n  }\n}",
        variables: {},
      });
      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
      };

   
        const response = await fetch(
          "https://stg-api.openbeta.io",
          requestOptions
        );
        const result = await response.json();

    

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<div>{result.data.areas[0].area_name}</div>
    </main>
  )
}
