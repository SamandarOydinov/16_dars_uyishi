import React from 'react';
import styles from './SectionCatalog.module.css';

function SectionCatalog() {
  return (
    <div className={styles.sectionCatalog}>
      <div className={styles.topSide}>
        <h2 className={styles.catalogTitle}>Каталог</h2>
        <button className={styles.button}>
          Весь каталог <img src="/arrowIcon.svg" alt="Arrow Icon" />
        </button>
      </div>
      <div className={styles.contentSide}>
        <div className={styles.catalog}>
          <div className={styles.div1}>
            <p className={styles.p1}>Люстры</p>
            <div className={styles.div2}>
              <p>От 540₽</p>
              <img className={styles.vector} src="/catalog/vector.png" alt="" />
            </div>
          </div>
          <div>
            <img className={styles.main_img} src="/catalog/cat1.png" alt="" />
          </div>
        </div>
        <div className={styles.catalog}>
          <div className={styles.div1}>
            <p className={styles.p1}>Люстры</p>
            <div className={styles.div2}>
              <p>От 540₽</p>
              <img className={styles.vector} src="/catalog/vector.png" alt="" />
            </div>
          </div>
          <div>
            <img className={styles.main_img} src="/catalog/cat2.png" alt="" />
          </div>
        </div>
        <div className={styles.catalog}>
          <div className={styles.div1}>
            <p className={styles.p1}>Люстры</p>
            <div className={styles.div2}>
              <p>От 540₽</p>
              <img className={styles.vector} src="/catalog/vector.png" alt="" />
            </div>
          </div>
          <div>
            <img className={styles.main_img} src="/catalog/cat3.png" alt="" />
          </div>
        </div>
        <div className={styles.catalog}>
          <div className={styles.div1}>
            <p className={styles.p1}>Люстры</p>
            <div className={styles.div2}>
              <p>От 540₽</p>
              <img className={styles.vector} src="/catalog/vector.png" alt="" />
            </div>
          </div>
          <div>
            <img className={styles.main_img} src="/catalog/cat4.png" alt="" />
          </div>
        </div>
        <div className={styles.catalog}>
          <div className={styles.div1}>
            <p className={styles.p1}>Люстры</p>
            <div className={styles.div2}>
              <p>От 540₽</p>
              <img className={styles.vector} src="/catalog/vector.png" alt="" />
            </div>
          </div>
          <div>
            <img className={styles.main_img} src="/catalog/cat5.png" alt="" />
          </div>
        </div>
        <div className={styles.catalog}>
          <div className={styles.div1}>
            <p className={styles.p1}>Люстры</p>
            <div className={styles.div2}>
              <p>От 540₽</p>
              <img className={styles.vector} src="/catalog/vector.png" alt="" />
            </div>
          </div>
          <div>
            <img className={styles.main_img} src="/catalog/cat6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCatalog;
