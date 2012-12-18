package bomhabito

import org.hibernate.cfg.FkSecondPass;

class LpageController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index = {
		String email = params.email
		String name = params.name == null ?  params.name:"bomHabitoA"
		String submit = params.submit
		Boolean saved = false
		if(email){
			if(!Stat.findByEmail(email)){
				println("####### salvando ${params.name} - ${params.email}")
				Stat stat = new Stat(email: email, landingPage: name)
				if(stat.save(flush:true)){
					println("asawsasadsad")
					saved = true
				}else{
					flash.error = "Por favor informe um e-mail válido!"
				}
			}else{
				saved = true
			}
		}else{
			if(submit)
				flash.error = "Por favor informe seu e-mail!"
		}
		println("--- " + saved)
		render(view: "${params.name}", model:[saved:saved])
    }

    def list = {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)
        [lpageInstanceList: Lpage.list(params), lpageInstanceTotal: Lpage.count()]
    }

    def create = {
        def lpageInstance = new Lpage()
        lpageInstance.properties = params
        return [lpageInstance: lpageInstance]
    }

    def save = {
        def lpageInstance = new Lpage(params)
        if (lpageInstance.save(flush: true)) {
            flash.message = "${message(code: 'default.created.message', args: [message(code: 'lpage.label', default: 'Lpage'), lpageInstance.id])}"
            redirect(action: "show", id: lpageInstance.id)
        }
        else {
            render(view: "create", model: [lpageInstance: lpageInstance])
        }
    }

    def show = {
        def lpageInstance = Lpage.get(params.id)
        if (!lpageInstance) {
            flash.message = "${message(code: 'default.not.found.message', args: [message(code: 'lpage.label', default: 'Lpage'), params.id])}"
            redirect(action: "list")
        }
        else {
            [lpageInstance: lpageInstance]
        }
    }

    def edit = {
        def lpageInstance = Lpage.get(params.id)
        if (!lpageInstance) {
            flash.message = "${message(code: 'default.not.found.message', args: [message(code: 'lpage.label', default: 'Lpage'), params.id])}"
            redirect(action: "list")
        }
        else {
            return [lpageInstance: lpageInstance]
        }
    }

    def update = {
        def lpageInstance = Lpage.get(params.id)
        if (lpageInstance) {
            if (params.version) {
                def version = params.version.toLong()
                if (lpageInstance.version > version) {
                    
                    lpageInstance.errors.rejectValue("version", "default.optimistic.locking.failure", [message(code: 'lpage.label', default: 'Lpage')] as Object[], "Another user has updated this Lpage while you were editing")
                    render(view: "edit", model: [lpageInstance: lpageInstance])
                    return
                }
            }
            lpageInstance.properties = params
            if (!lpageInstance.hasErrors() && lpageInstance.save(flush: true)) {
                flash.message = "${message(code: 'default.updated.message', args: [message(code: 'lpage.label', default: 'Lpage'), lpageInstance.id])}"
                redirect(action: "show", id: lpageInstance.id)
            }
            else {
                render(view: "edit", model: [lpageInstance: lpageInstance])
            }
        }
        else {
            flash.message = "${message(code: 'default.not.found.message', args: [message(code: 'lpage.label', default: 'Lpage'), params.id])}"
            redirect(action: "list")
        }
    }

    def delete = {
        def lpageInstance = Lpage.get(params.id)
        if (lpageInstance) {
            try {
                lpageInstance.delete(flush: true)
                flash.message = "${message(code: 'default.deleted.message', args: [message(code: 'lpage.label', default: 'Lpage'), params.id])}"
                redirect(action: "list")
            }
            catch (org.springframework.dao.DataIntegrityViolationException e) {
                flash.message = "${message(code: 'default.not.deleted.message', args: [message(code: 'lpage.label', default: 'Lpage'), params.id])}"
                redirect(action: "show", id: params.id)
            }
        }
        else {
            flash.message = "${message(code: 'default.not.found.message', args: [message(code: 'lpage.label', default: 'Lpage'), params.id])}"
            redirect(action: "list")
        }
    }
}
