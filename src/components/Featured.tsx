export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Диалог «Федон» · Платон</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Тело — тюрьма для души. Лишь покинув его, она обретает способность созерцать истинные идеи: Красоту, Справедливость и Благо в их совершенной форме.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="border-l-2 border-neutral-900 pl-4">
            <p className="text-sm uppercase tracking-wide text-neutral-500 mb-1">Бессмертие души</p>
            <p className="text-neutral-700">Душа существовала до рождения и продолжает существовать после смерти тела</p>
          </div>
          <div className="border-l-2 border-neutral-900 pl-4">
            <p className="text-sm uppercase tracking-wide text-neutral-500 mb-1">Мир идей</p>
            <p className="text-neutral-700">Смерть открывает путь к познанию абсолютных истин, недоступных при жизни</p>
          </div>
          <div className="border-l-2 border-neutral-900 pl-4">
            <p className="text-sm uppercase tracking-wide text-neutral-500 mb-1">Философия как практика</p>
            <p className="text-neutral-700">Мудрец всю жизнь готовится к смерти — очищает душу от телесных страстей</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Читать диалог
        </button>
      </div>
    </div>
  );
}