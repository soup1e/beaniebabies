export function renderBeanie(beanie) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = beanie.image;
    img.alt = beanie.title;

    const h3 = document.createElement('h3');
    h3.textContent = beanie.title;

    const span = document.createElement('span');
    span.textContent = beanie.astroSign;

    li.append(img, h3, span);
    return li;
}

export function renderAstroSignOption(astroSign) {
    const option = document.createElement('option');
    option.value = astroSign.name;
    option.textContent = astroSign.name;
    return option;
}
