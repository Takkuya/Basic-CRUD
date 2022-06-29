//reescrevendo a tipagem do express por causa do "erro" do auth middleware
declare namespace Express {
  export interface Request {
    userId: string
  }
}
