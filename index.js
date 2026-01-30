const express = require("express");

const app = express();
const PORT = 3000;

const users = [
  {
    id: 1,
    username: "bhupender",
    email: "bhupender@gmail.com",
    status: "active"
  },
  {
    id: 2,
    username: "rahul",
    email: "rahul123@gmail.com",
    status: "inactive"
  },
  {
    id: 3,
    username: "priya",
    email: "priya.dev@gmail.com",
    status: "active"
  },
  {
    id: 4,
    username: "amit",
    email: "amit.tech@gmail.com",
    status: "pending"
  },
  {
    id: 5,
    username: "neha",
    email: "neha@gmail.com",
    status: "blocked"
  }
];


app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

app.get("/user/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.json(user);
});


app.post("/user/:id", (req, res)=>{
    const id =req.params.id;
    const user = req.body;

    console.log("added succesfully")
    console.log("ID:", id);
    console.log("Body:", user);
    
    
    res.send("User added successfully");
    
})

app.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.json({
    message: "User deleted successfully",
    user: deletedUser[0]
  });
});


app.listen(PORT, () => {
  console.log(`Server running`);
});
