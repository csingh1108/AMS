import { Component } from '@angular/core';
import { Client } from 'src/Modals/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clientForm: Client = new Client("","","","");

  addtoClientDB(){};

}
