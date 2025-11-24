Feature: Login SauceDemo
  @login
  Scenario: Login como usuario normal
    Given  Me logueo como usuario correctamente
  
  @login
  Scenario Outline: Login usuario - Escenario Outline 
    Given Navego al sitio de automationtesting
    When Me logueo como usuario con user '<user>' y pass '<pass>' 
    Then Valido que me redirijo al home
   

        Examples:
          | user                                            |   pass                |
          | performance_glitch_user                         |   secret_sauce        |

  