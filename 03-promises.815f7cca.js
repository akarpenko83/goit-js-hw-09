!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t);var i=t("h6c0i");window.onload=function(){Particles.init({selector:".background",sizeVariations:4,connectParticles:!0,minDistance:200,color:"#808080",responsive:[{breakpoint:768,options:{maxParticles:100,color:"#D3D3D3",minDistance:70,connectParticles:!0}},{breakpoint:425,options:{maxParticles:100,connectParticles:!0}},{breakpoint:320,options:{maxParticles:0}}]})};function r(e,n){const o=new Promise(((o,t)=>{const i=Math.random()>.3;setTimeout((()=>{i&&o(`✅ Fulfilled promise ${e} in ${n}ms`),t(`❌ Rejected promise ${e} in ${n}ms`)}),n)}));return o.position=e,o.delay=n,o}({formRef:document.querySelector("form")}).formRef.addEventListener("submit",(function(e){e.preventDefault();const n=e.currentTarget.elements;let o=Number(n.delay.value);const t=Number(n.step.value),l=Number(n.amount.value);if(o<=0||t<=0||l<=0)return i.Notify.failure("Please enter a valid value");!function(e,n,o,t){for(let l=0;l<e;l++)r(t,n).then((e=>{i.Notify.success(e),console.log(e)})).catch((e=>{i.Notify.failure(e),console.log(e)})),t+=1,n+=o}(l,o,t,1)}))}();
//# sourceMappingURL=03-promises.815f7cca.js.map
