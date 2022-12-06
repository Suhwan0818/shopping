import useScrollFadeIn from '../hooks/useScrollFadeIn';

const Infomation = () => {
  const animatedItem = useScrollFadeIn();
  return (
    <>
      <article className="w-full p-4 text-center bg-slate-500 border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 text-slate-50 m-13 relative">
        <p {...animatedItem} className="font-bold">
          기본정보
        </p>
      </article>
    </>
  );
};

export default Infomation;
