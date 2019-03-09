import "jquery";
import "bootstrap-slider";

import "@dotnet/jsinterop";

// this lets us do instance (not static) interop back to .NET
interface DotNetObject {
    invokeMethod<T>(methodIdentifier: string, ...args: any[]): T;

    invokeMethodAsync<T>(methodIdentifier: string, ...args: any[]): Promise<T>;
}

namespace SampleComponent.Shared.Components {
    export class Slider {
        Element: HTMLElement;
        DotNetInstance: DotNetObject;

        constructor(elem: HTMLElement, dotNetInstance: DotNetObject) {
            this.Element = elem.firstElementChild as HTMLElement;
            this.DotNetInstance = dotNetInstance;

            this.Element.style.width = '20rem';

            var jqElement = $(this.Element);

            var slider = jqElement.slider();

            slider.on('slide', e => this.DotNetInstance.invokeMethod('SetValue', e.value));
        }
    }
}

declare global {
    /*
     * explicitly add componentFunctions to the existing Window interface.
     * TypeScript doesn't know yet that, in index.html, we're already defined
     * componentFunctions.
     */
    interface Window { componentFunctions: any; }
}

var component: SampleComponent.Shared.Components.Slider = null;

window.componentFunctions["initSlider"] =
    (elem: HTMLElement, instance: DotNetObject) => {
        if (component != null)
            return;

        component = new SampleComponent.Shared.Components.Slider(elem, instance);
    };
