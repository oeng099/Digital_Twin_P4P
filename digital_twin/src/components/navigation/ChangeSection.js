import './ChangeSection.css'

export default function ChangeSection({modulePage}){

      

      function testResults() {

        }

      return(
            <div className="change-section-background">
                  <div className="change-section-text">
                        Change Target {modulePage} :
                  <form name="tempForm" className="change-form" action='' method='GET'>
                        <input type="text" placeholder={modulePage} id='temperatureInput' name='TemperatureInput' value=''/><br></br>
                        <input type="button" value="Submit" name='SubmitButton' onClick={testResults()}></input>
                  </form>
                  </div>
            </div>
      );
}