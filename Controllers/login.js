import auth from "../Models/auth";

export const authon = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await auth.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      return res.status(500).json({ message: 'Login failed', error: error.message });
    }
};

export const register = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const existingUser = await auth.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
  
      const newUser = new auth({ username, password });
      await newUser.save();
  
      return res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      return res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};

export const userdata = async (req, res) => {
    try {
      const username = req.query.username;
      const user = await auth.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch user data', error: error.message });
    }
};