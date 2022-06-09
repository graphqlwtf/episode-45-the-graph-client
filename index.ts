import { execute, GetRegistrationsDocument } from "./.graphclient";

async function main() {
  const {
    data: { registrations },
  } = await execute(GetRegistrationsDocument, {});

  console.log(registrations);
}

main().catch(console.error);
