import { hash } from "bcrypt";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id_user_1 = '9b7fa37b-5b58-456c-bd3f-a2799a34df4c';
  const password_user_1 = await hash("argentina", 8);

  const id_user_2 = '35ec306c-a957-4e72-b95a-ddaf5a296a43';
  const password_user_2 = await hash("portugal", 8);

  await connection.query(
    `
    INSERT INTO USERS(id, name, email, password, created_at, updated_at) 
    values('${id_user_1 }', 'Leonel Messi', 'messi@messi.com', '${password_user_1 }', 'now', 'now')
    `
  );

  await connection.query(
    `
    INSERT INTO USERS(id, name, email, password, created_at, updated_at) 
    values('${id_user_2}', 'Cristiano Ronaldo', 'ronaldo@cr7.com', '${password_user_2 }', 'now', 'now')
    `
  );

  await connection.close();
}

create().then(() => console.log("Users created!"));
