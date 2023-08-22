import './ChangeSection.css'

export default function ChangeSection({modulePage}){

      return(
            <div className="change-section-background">
                  <div className="change-section-text">
                        Change Target {modulePage} :
                  <form className="change-form">
                        <input type="text" placeholder={modulePage}/><br></br>
                        <input type="button" value="Submit"></input>
                  </form>
                  </div>
            </div>
      );
}