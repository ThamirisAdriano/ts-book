import { INewsService } from "../contracts/iNewsService";
import { Result } from "../infra/result";
import { NewsRepository } from "../repository/newsRepository";


//essa parte do código nos ajuda a pegar uma notícia específica com base no _id fornecido. 
//Ele nos retorna a notícia que encontramos.

export class NewsService implements INewsService{ 
    async get(_id: string) {
        let result = await NewsRepository.findById(_id);
        return result
    }

    //essa parte do código nos ajuda a obter todas as notícias em uma 
    //determinada página, com base nos parâmetros page e qtd fornecidos. 
    //Ele retorna todas essas informações dentro de um objeto chamado result.

    async	getAll(page:	number,	qtd:	number):	Promise<Result>	{
        let	result	= new	Result();
        result.Page	= page;
        result.Qtd	= qtd;
        result.Total = await NewsRepository.count({});
        result.Data	= await NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return	result;
}
}