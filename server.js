import express from "express";

const app = express();

app.use(express.static("/app/dist"));
app.get("/{*any}", (req, res) => {
	res.sendFile("/app/dist/index.html");
});
// Start the server
app.listen(3001, () => {
	console.log(`Server running on port 3001!`);
});
