package bomhabito
import org.hibernate.cfg.FkSecondPass

class LpageController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index = {
		String email = params.email
        String message = null
        String name = params.name
		Boolean saved = false
        List<PostEntry> posts = new ArrayList<PostEntry>();
    
        posts.add(new PostEntry(
                title:"4 Regras Primordiais Para Motivar Equipes de Trabalho", 
                text:"Toda empresa tenta se destacar no mercado no qual atua. Para isso, além de uma boa estrutura de departamentos e uma equipe qualificada ...", 
                date:"22/12/2012", 
                link:"http://vilamulher.terra.com.br/4-regras-primordiais-para-motivar-equipes-de-trabalho-5-1-37-1163.html"))
        posts.add(new PostEntry(
            title:"SCRUM: Investindo em gerenciamento de projetos e desenvolvimento ágil de software", 
            text:"Considerada uma metodologia ágil de gerenciamento de projetos executados por pequenas equipes, auto-organizáveis e que trabalham com entregas cíclicas, tornando o desenvolvimento do projeto algo iterativo, o Scrum pode ser utilizado em projetos que não estejam ligados ao desenvolvimento de softwar", 
            date:"13/06/2012", 
            link:"http://informationweek.itweb.com.br/voce-informa/scrum-investindo-em-gerenciamento-de-projetos-e-desenvolvimento-agil-de-software/"))

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
        render(view: name, model:[saved:saved, posts:posts])
    }
}

