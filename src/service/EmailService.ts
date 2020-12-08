
interface IMailTo{
    name: string;
    email: string;
}

// ?: significa se é "opcional" ou não.
interface IMailMessage{
    subject: string;
    body?: string;
    attachment?: string[]; // ou  Array<string>;
}

interface IMessageDTO{
    to: IMailTo
    message: IMailMessage
}

//exemplo de interface para implementar metodos
interface IEmailService{
    sendEmail(to: IMailTo, message: IMailMessage): string;
}


export class EmailService implements IEmailService{
    sendEmail(to: IMailTo, message: IMailMessage){
        return `email enviado para ${to.name}: ${message.subject}`
    }

    sendEmailMessageDTO(messageDTO: IMessageDTO){
        return `email enviado para ${messageDTO.to.name}: ${messageDTO.message.subject}`
    }

    /*
    *
    * Na documentação Mozilla sobre herança no JavaScript está escrito que em JavaScript
    * não existem "métodos" como os que conhecemos em linguagens baseadas em classes.
    * Em JavaScript, qualquer função pode ser adicionada em um objeto em forma de propriedade.
    * Uma herança de funções age como a herança de quaisquer outras propriedades que não sejam funções,
    * e podemos inclusive realizar sobre-escrita de função. Mas a documentação não cita a sobrecarga.
    *
    * O problema é que o JavaScript NÃO suporta nativamente a sobrecarga de métodos. Portanto,
    * se visualizar / analisar duas ou mais funções com o mesmo nome, apenas considerará a
    * última função definida e substituirá as anteriores.
    sendEmail(messageDTO: IMessageDTO){
        console.log(`email enviado para ${to.name}: ${message.subject}`)
    }
    */
}
