import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent {
    // starWidth: number = 346;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    // Using getters & setters
    _rating: number;

    @Input() get rating (): number {
        return this._rating;
    }

    set rating(value: number) {
        this._rating = value;
        this.starWidth = value * 86/5
    }

    // Using ngOnChanges
    // @Input() rating: number = 4;
    ngOnChanges(): void {
        // this.starWidth = this.rating * 86/5;
    }

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}