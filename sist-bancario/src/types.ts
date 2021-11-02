
export type conta = {
   cpf: string,
   saldo: number,
   extrato: transacao[]

}

export type user = {
   nome: string,
   cpf: string,
   nascimento: string
}

export type transacao = {
   valor: number,
   data: string
}
