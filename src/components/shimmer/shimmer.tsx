import { Component, Prop, Element } from '@stencil/core';

@Component({
    tag: 'hive-shimmer',
    styleUrl: 'shimmer.css',
    shadow: true,
})
export class ShimmerComponent {

    @Element() shimmerEl: HTMLElement;

    @Prop() shape: 'box' | 'line' | 'circle' = 'line';
    @Prop() rows = 1;

    @Prop({mutable: true}) width: string | number = '100%';

    componentDidLoad() {
        if (this.shimmerEl) {
            this.shimmerEl.style.setProperty('--line-width', this._formattedWidth);
        }
    }

    private get _formattedWidth(): string {
        if (isNaN(this.width as number)) {
            return this.width.toString();
        }
        return `${this.width}px`;
    }

    render() {
        if (this.shape === 'box') {
            return (
                <box class="shine"></box>
            )
        }
        else if (this.shape === 'circle') {
            return (
                <div>
                    <box class="shine circle"></box>
                </div>
            )
        }
        else {
            const lines = [];
            for (let i = 0; i < this.rows; i++) {
                lines.push(<lines class="shine"></lines>);
            }
            return (
                <div>
                    {lines}
                </div>
            );
        }
    }
}
