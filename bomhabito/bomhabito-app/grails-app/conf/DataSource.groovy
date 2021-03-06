xdataSource {
    pooled = true
    driverClassName = "org.hsqldb.jdbcDriver"
    username = "sa"
    password = ""
}
hibernate {
    cache.use_second_level_cache = true
    cache.use_query_cache = true
    cache.provider_class = 'net.sf.ehcache.hibernate.EhCacheProvider'
}
// environment specific settings
environments {

    development {
        /*  dataSource {
            dbCreate = "update"
            url = "jdbc:hsqldb:mem:testDb"
        }*/
        dataSource {
					driverClassName = "org.postgresql.Driver"
					dialect = "org.hibernate.dialect.PostgreSQLDialect"
					dbCreate = "create-drop"
					url="jdbc:postgresql://localhost:5432/bomhabito"
					username = "informant"
                    password = "1nf0rm4nt"
		}
        
    }
	
    test {
        dataSource {
            dbCreate = "update"
            url = "jdbc:hsqldb:mem:testDb"
        }
    }
    
    production {
         dataSource {
					driverClassName = "org.postgresql.Driver"
					dialect = "org.hibernate.dialect.PostgreSQLDialect"
					dbCreate = "update"
					url="jdbc:postgresql://localhost:5432/bomhabito"
					username = "informant"
					password = "1nf0rm4nt"
				}
    }
}
