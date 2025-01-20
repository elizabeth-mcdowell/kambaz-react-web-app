//testing key 
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b><br/><br/></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br/><br/>
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <br/>
    
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
               <br/>
            </td>
          </tr>
          <br/>
  
        <tr>
            <td align="right"valign="top">
                    <label  htmlFor="wd-group"> Assignment Group: </label>
            </td>
            <td>
                    <select id="wd-group">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="OTHER">OTHER</option>
                    </select>
            </td>
        </tr>
        <br/>

        <tr>
            <td align="right" valign="top">
            <label  htmlFor="wd-display-grade-as"> Display Grade as: </label>
            </td>
            <td>
                    <select id="wd-display-grade-as">
                    <option value="PERCENTAGE">PERCENTAGE</option>
                    <option value="FRACTION">FRACTION</option>
                    <option value="OTHER">OTHER</option>
                    </select>
            </td>
        </tr>
        <br/>

        <tr>
            <td align="right" valign="top">
            <label  htmlFor="wd-submission-type	 "> Submission Type: </label>
            </td><td>
                    <select id="wd-submission-type">
                    <option value="ASSIGNMENTS">ONLINE</option>
                    <option value="ASSIGNMENTS">INPERSON</option>
                    <option value="OTHER">OTHER</option>
                    </select>
            </td>
        </tr>
        <br/>

        <tr>
            <td align="right" valign="top"></td>
            <td align="left" valign="top">
                <label>Online Entry Type:</label><br/>
                <input type="checkbox" name="check-entry-type" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry </label><br/>


                <input type="checkbox" name="check-entry-type" id="wd-website-url"/>
                <label htmlFor="wd-website-url"> Website URL  </label><br/>


                <input type="checkbox" name="check-entry-type" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings </label><br/>


                <input type="checkbox" name="check-entry-type" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation"> Student Annotation  </label><br/>


                <input type="checkbox" name="check-entry-type" id="wd-file-upload	"/>
                <label htmlFor="wd-file-upload">  File Uploads </label><br/>
            </td>
        </tr>
        <br/>

       
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign To</label><br/>
                <select id="wd-assign-to">
                <option value="EVERYONE">Everyone</option>
                <option value="OTHER">Other</option>
                </select>
            </td>
        </tr>
        <br/>

        <tr>
        <td align="right"valign="top"></td>
            <td>
            <label htmlFor="wd-due-date">Due</label><br/>
            <input type="date" value="2000-01-21" id="wd-due-date" /><br />
        </td>
        </tr>
        <br/>

        <tr>
        <td align="right"valign="top"></td>
        <td align="left" valign="top">
            <label htmlFor="wd-available-from">Available From</label><br />
            <input type="date" value="2000-01-21" id="wd-available-from" /><br />
        </td>
        <br/>
        
        <td align="left" valign="top">
            <label htmlFor="wd-available-until">Until</label><br />
            <input type="date" value="2000-01-21" id="wd-available-until" /><br />
        </td>
        </tr>
        </table>

        <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />

        <div style={{ textAlign: 'right' }}>
                <button type="button"
                        onClick={() => alert("Will be cancel")}
                        id="wd-cancel">
                    Cancel
                </button>
            
                <button type="button"
                            onClick={() => alert("Will be save")}
                            id="wd-save">
                    Save
                </button>
        </div>





      </div>
  );}
  