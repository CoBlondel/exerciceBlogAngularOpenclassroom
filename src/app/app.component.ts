import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts = [
        {
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,' +
            ' ultricies sed, dolor. Cras elementum ultrices diam.',
            loveIts: 0,
            created_at: Date()
        },
        {
            title: 'Mon second post',
            content: 'Cras vestibulum bibendum augue. Praesent egestas leo in pede. ' +
            'Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.' +
            ' Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
            loveIts: 0,
            created_at: Date()
        },
        {
            title: 'Encore un post',
            content: 'Aliquam convallis sollicitudin purus. Praesent aliquam, ' +
            'enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. ' +
            'Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim.',
            loveIts: 0,
            created_at: Date()
        }
    ];
}
