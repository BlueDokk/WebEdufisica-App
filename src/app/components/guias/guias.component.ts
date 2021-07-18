import { Component, OnInit } from '@angular/core';
import { GuiasService } from '../../services/guias.service';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css']
})
export class GuiasComponent implements OnInit {

  columnsGuias: any = [];

  constructor(private _guiasService:GuiasService) { }

  ngOnInit(): void {
    (async () => this.columnsGuias = await this._guiasService.getGuias())();
  }

}
