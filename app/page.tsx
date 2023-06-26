import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient()
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
        let newName = `abc${Math.floor(Math.random()*10000)}`
        let newEmail = `abc${Math.floor(Math.random()*10000)}`
        const newUser = await prisma.user.create({
          
          data: {
            name: newName, // Replace with the desired name for the new user
            email: `${newEmail}.doe@example.com`, // Replace with the desired email for the new user
          },
        });
        
        const allUsers = await prisma.user.findMany()
        prisma.$disconnect();

if(!newUser || !result) return <div className="flex min-h-screen flex-col items-center justify-between p-24">loading....</div>
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<div>{result.data.areas[0].area_name}</div>
<div>{newUser.name}</div>
    </main>
  )
}
