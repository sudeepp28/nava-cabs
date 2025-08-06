import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutData } from '../../aboutData';

@Component({
  selector: 'app-adetail',
  standalone:false,
  templateUrl: './adetail.component.html',
  styleUrl: './adetail.component.css'
})
export class AdetailComponent implements OnInit{
  data=AboutData
  selectedId:any
  selectedData:any
constructor(private route: ActivatedRoute){

}

ngOnInit(): void {
  this.selectedId=this.route.snapshot.paramMap.get('id')
  console.log(this.selectedId)
  if(this.selectedId){
    this.selectedData=this.data.find(i=>i.id===this.selectedId)
    console.log(this.selectedData)
  }
}
}
