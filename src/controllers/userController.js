import { registerUser, loginUser } from '../services/userService';

export async function registerUserHandler(req, res) {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export async function loginHandler(req, res) {
  const { email, password } = req.body;
  try {
    const { token, user } = await loginUser(email, password);
    res.json({ token, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
