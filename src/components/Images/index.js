import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
//không cần sử dụng cx vì có mỗi 1 class

//console.log(images.noImage);
function Image({ src, alt, className, fullback: customFullback = images.noImage, ...props }, ref) {
    //khi lỗi
    const [fallback, setFallback] = useState('');

    //sẽ set lại sate
    const handleError = () => {
        setFallback(customFullback);
    };

    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            className={classNames(styles.wrapper, className)}
            //styles.wrapper là class css module, còn class truyền ngoài vào thì tên chính là chuỗi đó
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
//bê ref của img forward ra cho component Image
