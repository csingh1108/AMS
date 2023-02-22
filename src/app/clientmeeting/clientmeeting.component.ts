import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientmeeting',
  templateUrl: './clientmeeting.component.html',
  styleUrls: ['./clientmeeting.component.css']
})
export class ClientmeetingComponent {

  times = [
    {title: "8:30am", value:10},
    {title: "9:00am", value:20},
    {title: "9:30am", value:30},
    {title: "10:00am", value:40},
    {title: "10:30am", value:50},
    {title: "11:00am", value:60},
    {title: "11:30am", value:70},
    {title: "12:00pm", value:80},
    {title: "1:00pm", value:90},
    {title: "1:30pm", value:100},
    {title: "2:00pm", value:110},
    {title: "2:30pm", value:120},
    {title: "3:00pm", value:130},
    {title: "3:30pm", value:140},
    {title: "4:00pm", value:150},
  ]

  types = [
    {title: "Pre-design"},
    {title: "Concept"},
    {title: "Financial or Approvals"},
    {title: "Vendor Contracting"}, 
    {title: "Progress Assessment"},
    {title: "Final Review"},
    {title: "Other"}
  ]

  clientmeetingForm = new FormGroup({
    meetingname:new FormControl(''),
    date:new FormControl(''),
    time:new FormControl(this.times[0]),
    stage:new FormControl(this.types[0])

  })

  addtoClientMeetingsDB(){};
}
