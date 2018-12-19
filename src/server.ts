import express from "express";
import { Chain } from "./models/chain.class";
import { Request, Response } from "express-serve-static-core";


const app = express();

const k: Chain = new Chain();


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
