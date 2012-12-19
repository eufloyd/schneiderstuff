package bomhabito

import org.hibernate.cfg.FkSecondPass;

class LpageController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index = {
		String email = params.email
        String message = null
        String name = params.name
		Boolean saved = false
        try {
            if(email){
                println("####### salvando ${params.name} - ${params.email}")
                if(!Stat.findByEmail(email)){
                    Stat stat = new Stat(email: email, landingPage: name)
                    stat.save(flush:true)
                }
                 saved = true
            }
        }catch(Exception e) {
            e.printStackTrace()
        }
        println("--- " + saved.toString())
        render(view: name, model:[saved:saved])
    }
}

