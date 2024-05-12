import { Human } from '$/interfaces';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';
import { HumanService } from '@S/human.service';
@Component({
    selector: 'Resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
    tailwindCss = resolveConfig(tailwindConfig);
    data: Human;
    dt: Date;
    constructor(private titleService: Title, private hS: HumanService) {
        this.dt = new Date();
        this.data = this.hS.data;
        this.titleService.setTitle(`Resume_${this.data.name.replace(' ', '_')}_dotNET_n_Angular__${+this.dt}_${this.dt.getDate()}_${this.dt.getMonth() + 1}_${this.dt.getFullYear()}`);
    }

    get vCardData(): string {
        return `BEGIN:VCARD
VERSION:3.0
N:${this.data.name.split(' ')[1]};${this.data.name.split(' ')[0]}
ORG:${this.data.organization}
TITLE:${this.data.designation}
EMAIL;TYPE=INTERNET:${this.data.email.text}
TEL;TYPE=voice,work,pref,CELL:+91${this.data.phone.text}
ADR:;;${this.data.address}
END:VCARD
`;
    }

    get yearsOfExperience(): string {
        var diffStr: string = '';
        var diff: number = Math.abs(this.dt.getTime() - new Date('2022-03-16').getTime());
        var diffDays: number = Math.ceil(diff / (1000 * 3600 * 24));
        if (diffDays < 30) {
            diffStr = `${diffDays} Days`;
        }
        else if (diffDays >= 30) {
            var diffMonths = Math.floor(diffDays / 30);
            var remainingDays = diffDays - diffMonths * 30;
            if (remainingDays > 0) {
                if (diffMonths < 12) {
                    diffStr = `${diffMonths}M+`;
                }
                if (diffMonths > 12) {
                    var diffYear: number = Math.floor(diffMonths / 12);
                    var remainingMonths = diffMonths - diffYear * 12;
                    if (remainingMonths > 6) {
                        diffStr = `${diffYear}Y ${remainingMonths}M`;
                    }
                    else {
                        diffStr = `${diffYear}Y+`;
                    }
                }
            }
            else {
                diffStr = `${diffMonths}M`;
            }
        }
        return diffStr;
    }

    arrayOfString(v: any): string[] {
        return v as string[];
    }

    ngOnInit() { }
}
