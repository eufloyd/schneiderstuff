package bomhabito
import org.hibernate.cfg.FkSecondPass

class LpageController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def  index = {
        String email = params.email
        String message = null
        String name = params.name
        Boolean isBusiness = false
        Boolean saved = false

        if("on".equals(params.isBusiness))
            isBusiness = true
        
        try {
            if(email){
                if(!Stat.findByEmail(email)){
                        Stat stat = new Stat(email: email, landingPage: name, isBusiness:isBusiness)
                        stat.save(flush:true)
                } 
                saved = true
            } 
        }catch(Exception e) {
            e.printStackTrace()
        }
        render(view: name, model:[saved:saved, posts:PostEntry.getPostEntryList()])
    }

}


//http://olhardigital.uol.com.br/jovem/digital_news/noticias/competicao-pelo-mercado-negro-da-deep-web-aumenta