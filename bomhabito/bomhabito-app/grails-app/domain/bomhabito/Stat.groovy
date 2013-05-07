package bomhabito

class Stat {
	
	String email
	String landingPage
	Boolean isBusiness

    static constraints = {
		email blank:false, nullable: false, email:true
		landingPage blank:false,  nullable: false
		isBusiness nullable:false
    }
}
