import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BoardOrder } from 'src/app/Models/Board';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  boardForm!: FormGroup;
  activeImage: string ="https://lh5.googleusercontent.com/P2y2googM-jjieStyXNJ3ZLFgWxieFBTQsh-R-YpfErfOHET6etZ0AB8IFdgZt8eI1l3Rc_4RtXcghYFypo4U5upYceg5I0oV3GVjTM898IJEi7uD_5XCehx_HM7OQxlKw=w260";
  imageArray: any[] =
  [
    "https://lh5.googleusercontent.com/P2y2googM-jjieStyXNJ3ZLFgWxieFBTQsh-R-YpfErfOHET6etZ0AB8IFdgZt8eI1l3Rc_4RtXcghYFypo4U5upYceg5I0oV3GVjTM898IJEi7uD_5XCehx_HM7OQxlKw=w260",
    "https://lh4.googleusercontent.com/p7WmdSR8ta5GS8g05uSGZcJkpXIXdwC1DkUsLyb_7_cXgfclsXLNTEwqUdNGPV7gWUwImQrK6e43BaFGDanM78qkNhwbyYch1Emp9LBWaONKD32aBjW7eiFTmcaVenxRlA=w260",
    "https://lh3.googleusercontent.com/on_B90XlJkF0h1DaizE1JESkrK2L5KXCGDsawfLpfgE0iH7nOBsdROMDe9eMFYsAH9o2Mkp8J-aG7UBIqdrIiSs76H2PBmgXrQtTs_sWeN8P50NhRovqp9bOLAnbV-JB1Q=w260",
    "https://lh4.googleusercontent.com/UjUgLtwgXNNN5bJG2W-2uageZ3mLKusBJIj4_9GD1kMczoDGv6yOq7o9SUyBEAcJ9dW0tp4CF7pudqjAmoNK1dNvVPQx7iSN_ZlpIq9bQ68CubiwdzCMLbD2v_HoZiWGzg=w260",
    "https://lh3.googleusercontent.com/WkcBo9RbA_oVq0j_hIUAN7DezUEguDLGbJLcZHiYQvHFakbLivpjnvCqwSnw2jFUcpYSmoWeQyfI5s1TZqhIKLYWiSjncxIzKfQPoybwqimq3hvfm7Xv6oe8QEx1ggrAkg=w260",
    "https://lh5.googleusercontent.com/vAF3tnmDgHiQbRITLBRnVQDDRL2JsEZZs2F6eTpfySI-4AtLZ8fjQtbBiRfTVFT0ZRANqlgke_sO8OOKDkXOj5JhjLMKEBVk-qbCfNqUd95aXmhgIL5ooX_ONjUArYr9Mg=w260",
    "https://lh5.googleusercontent.com/JkkQrSIPMQ7xdN6kxp1Q0BCNu1DPlMvJVv2IlUeOfFbiOEwDWT-zAhbjUcexKHiCM64jXaQRBRRPR6lXKuk23A-iWFVUMoBox-IHx8hKHSEAhd_dhdKllLDORUJqlTkG2g=w260",
    "https://lh3.googleusercontent.com/TP3knqaOVGdq5mjFAe3jmfK_hZMBRrwkDbm0xCaWY0azi3uGEnp9fpRa9ZjsEpHaSg9G4b-yQvxuwBpa-DUoyoeS5PidbClmG8AIrtVtD9DL4HTX1n1rOGJVcc9I444Vfw=w260",
    "https://lh3.googleusercontent.com/TP3knqaOVGdq5mjFAe3jmfK_hZMBRrwkDbm0xCaWY0azi3uGEnp9fpRa9ZjsEpHaSg9G4b-yQvxuwBpa-DUoyoeS5PidbClmG8AIrtVtD9DL4HTX1n1rOGJVcc9I444Vfw=w260"

  ];


  boardSize: string[] =
  [
    "5in Personal Box",
    "9in Double Box",
    "12x12 Platter",
    "16x16 Platter",
    "Small 14in Board",
    "Medium 16in Board",
    "Large 18in Board",
    "Extra Large 21in Board"
  ];

  boardType: string[] = ["Regular", "Breakfast/Brunch", "Vegan"];

  meats: string[] =
  [
    'Pepperoni',
    'Prosciutto',
    'Peppered Salami',
    'Calabrese',
    'Hot Capacola',
    'Sweet Capacola',
    'Soprasata',
    'Italian Dry Salami',
    'Spicy Salami',
    'Coppa',
    'Genoa Salami'

  ];

  cheeses: string[] =
  [
    'Aged Cheddar',
    'Colby Jack',
    'Mozzarella',
    'Pepper Jack',
    'Smoked Godua',
    'Aged Godua',
    'Blue Cheese',
    'Swiss',
    'Goat',
    'Brie',
    'Cheddar',
    'Havarti',
    'Feta',
    'Parmesan',
    'Boursin',
    'Asiago',
    'Camembert',
    'Bellavitano',
    'Manchego',
    'Gorgonzola'
  ];


  ngOnInit(): void {

    this.boardForm = this.fb.group({
      Size: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      Meats: ['', [Validators.required,]],
      Cheeses: ['', [Validators.required]],
      Requsts: ['', [Validators.required]],
      Dislikes: [false, [Validators.required]],
      Price: ['', [Validators.required]],
      CDate: ['', [Validators.required]]
    });

    this.boardForm.controls.Size.setValue(this.boardSize[0]);
    this.boardForm.get('Size')?.valueChanges.subscribe(changedData =>{
      this.boardSize.forEach((element, index) =>
      {
          if(changedData == element)
          this.activeImage=this.imageArray[index]
      });

    });



 }

}
