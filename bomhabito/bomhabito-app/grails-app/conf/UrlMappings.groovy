class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}
		
		"/lpage/$name" {
			controller= "lpage"
			action = "index"
		}

		"/" {
			controller = "lpage"
			action = "index"
			name="bomHabito"
		}
		
		"500"(view:'/error')
	}
}
