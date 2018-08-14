import { TestWindow } from '@stencil/core/dist/testing';
import { ShimmerComponent } from './shimmer';

describe('hive-shimmer', () => {

    it('should build', () => {
        expect(new ShimmerComponent()).toBeTruthy();
    });

    describe('rendering', () => {
        let element: HTMLHiveShimmerElement;
        let testWindow: TestWindow;
        beforeEach(async () => {
            testWindow = new TestWindow();
            element = await testWindow.load({
                components: [ShimmerComponent],
                html: '<hive-shimmer></hive-shimmer>'
            });
        });

        it('should work without parameters', () => {
            expect(element.querySelectorAll('lines').length).toBeGreaterThan(0);
        });

        describe('shape', () => {

            it('should render a line', async () => {
                element.shape = 'line';
                await testWindow.flush();
                expect(element.querySelector('lines')).toBeDefined();
            });

            it('should render a box', async () => {
                element.shape = 'box';
                await testWindow.flush();
                expect(element.querySelector('box')).toBeDefined();
            });

            it('should render a circle', async () => {
                element.shape = 'circle';
                await testWindow.flush();
                expect(element.querySelector('.circle')).toBeDefined();
            });

        });

        describe('rows', () => {

            it('should render `n` rows', async () => {
                element.rows = 3;
                await testWindow.flush();
                expect(element.querySelectorAll('lines').length).toEqual(3);
            });

        });

    });
});
