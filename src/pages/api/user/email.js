import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('Unauthorized');
  }
  const email = session.user.email;
  res.status(200).json({ email });
};
